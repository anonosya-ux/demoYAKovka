import os
import subprocess
import glob

source_dir = "/Users/macbook/Desktop/сайт Отеля/Облако Mail"
target_dir = "./public/images/gallery"

if not os.path.exists(target_dir):
    os.makedirs(target_dir)

files = glob.glob(f"{source_dir}/*")
counter = 1

for file in files:
    ext = os.path.splitext(file)[1].lower()
    if ext in ['.jpg', '.jpeg', '.png', '.webp']:
        dest_name = f"gallery_{counter}{ext}"
        dest_path = os.path.join(target_dir, dest_name)
        print(f"Processing {os.path.basename(file)} -> {dest_name}")
        
        try:
            # using sips to convert and scale
            subprocess.run([
                "sips", "-Z", "1920", "-s", "format", "jpeg", 
                "-s", "formatOptions", "80", file, "--out", dest_path
            ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            counter += 1
        except Exception as e:
            print(f"Error processing {file}: {e}")

print(f"Finished processing {counter - 1} images.")
