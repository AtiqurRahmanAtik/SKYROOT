import os
import struct

assets_dir = r"e:\projects\SKYROOT\src\assets"
for filename in os.listdir(assets_dir):
    if filename.endswith(".png"):
        filepath = os.path.join(assets_dir, filename)
        with open(filepath, "rb") as f:
            data = f.read(30)
            if data.startswith(b"\x89PNG\r\n\x1a\n"):
                # IHDR starts at byte 12. Length of IHDR is 13 bytes.
                # Inside IHDR, width is 4 bytes at offset 16, height is 4 bytes at offset 20.
                width, height = struct.unpack(">II", data[16:24])
                print(f"{filename}: PNG, {width}x{height}, size={os.path.getsize(filepath)} bytes")
            else:
                print(f"{filename}: Not a valid PNG, size={os.path.getsize(filepath)} bytes")
