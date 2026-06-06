import os
import zlib
import struct

def is_inside_emblem(ex, ey):
    # 1. Outer Frame
    # Path: d="M0 0 H200 V180 H60 V150 H170 V30 H0 V0 Z"
    if (0 <= ex <= 200) and (0 <= ey <= 180):
        in_hole1 = (0 <= ex < 170) and (30 < ey < 150)
        in_hole2 = (0 <= ex < 60) and (150 <= ey <= 180)
        if not (in_hole1 or in_hole2):
            return True

    # 2. Trapezoid 1
    # Path: d="M60 45 H140 L110 75 H60 V45 Z"
    if (60 <= ex) and (45 <= ey <= 75) and (ex + ey <= 185):
        return True

    # 3. Trapezoid 2
    # Path: d="M60 90 H160 L130 120 H80 V150 H60 V90 Z"
    if (60 <= ex) and (90 <= ey <= 150) and (ex + ey <= 250):
        if not (ex > 80 and ey > 120):
            return True

    # 4. Rectangle
    # rect x="110" y="130" width="30" height="30"
    if (110 <= ex <= 140) and (130 <= ey <= 160):
        return True

    return False

def render_pixel(px, py, size):
    # px, py in 0..size-1
    # 8x8 supersampling
    N = 8
    inside_count = 0
    for sx in range(N):
        ex = (px + (sx + 0.5) / N) * 200 / size
        for sy in range(N):
            ey = (py + (sy + 0.5) / N) * 200 / size - 10
            if is_inside_emblem(ex, ey):
                inside_count += 1
    return inside_count / (N * N)

def create_png_data(size):
    pixels = bytearray()
    for py in range(size):
        for px in range(size):
            coverage = render_pixel(px, py, size)
            # Skyroot logo blue color: #1A53BA (RGB: 26, 83, 186)
            pixels.extend([26, 83, 186, int(255 * coverage)])
    
    # Compress rows with zlib. Each scanline has filter type byte (0)
    raw_data = b""
    for y in range(size):
        raw_data += b"\x00"
        raw_data += pixels[y * size * 4 : (y + 1) * size * 4]
    
    compressed = zlib.compress(raw_data)
    
    def make_chunk(tag, data):
        return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", zlib.crc32(tag + data))
    
    ihdr_data = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    png_data = (
        b"\x89PNG\r\n\x1a\n"
        + make_chunk(b"IHDR", ihdr_data)
        + make_chunk(b"IDAT", compressed)
        + make_chunk(b"IEND", b"")
    )
    return png_data

def generate_ico(sizes, output_path):
    # Header: 2 bytes reserved (0), 2 bytes type (1), 2 bytes count
    header = struct.pack("<HHH", 0, 1, len(sizes))
    
    directory = bytearray()
    png_datas = []
    
    offset = 6 + len(sizes) * 16
    for size in sizes:
        png_data = create_png_data(size)
        png_datas.append(png_data)
        
        width_byte = 0 if size >= 256 else size
        height_byte = 0 if size >= 256 else size
        colors = 0
        reserved = 0
        planes = 1
        bpp = 32
        data_size = len(png_data)
        
        directory.extend(struct.pack("<BBBBHHII", width_byte, height_byte, colors, reserved, planes, bpp, data_size, offset))
        offset += data_size
        
    with open(output_path, "wb") as f:
        f.write(header)
        f.write(directory)
        for png_data in png_datas:
            f.write(png_data)
    print(f"Generated favicon.ico with sizes {sizes} at {output_path}")

def generate_svg(output_path):
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">
  <g fill="#1A53BA" transform="translate(0, 10)">
    <path d="M0 0 H200 V180 H60 V150 H170 V30 H0 V0 Z" />
    <path d="M60 45 H140 L110 75 H60 V45 Z" />
    <path d="M60 90 H160 L130 120 H80 V150 H60 V90 Z" />
    <rect x="110" y="130" width="30" height="30" />
  </g>
</svg>
"""
    with open(output_path, "w") as f:
        f.write(svg_content)
    print(f"Generated favicon.svg at {output_path}")

if __name__ == "__main__":
    public_dir = r"e:\projects\SKYROOT\public"
    generate_ico([16, 32, 48, 64, 128, 256], os.path.join(public_dir, "favicon.ico"))
    generate_svg(os.path.join(public_dir, "favicon.svg"))
