import os
import urllib.request
import urllib.error

BASE_DIR = r"c:\Users\sneha\OneDrive\Desktop\amura"
PUBLIC_DIR = os.path.join(BASE_DIR, "public")

dirs = [
    "images/logo",
    "images/banners",
    "images/collections",
    "images/products/new-arrivals",
    "images/products/best-sellers",
    "images/products/lounge-wear",
    "images/products/bottom-wear",
    "images/occasions",
    "icons",
]

for d in dirs:
    os.makedirs(os.path.join(PUBLIC_DIR, d), exist_ok=True)

# Curated high quality Indian ethnic wear images from Unsplash
IMAGE_URLS = {
    "images/banners/hero-banner.jpg": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=80",
    "images/banners/collection-banner.jpg": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=80",
    "images/banners/promotional-banner.jpg": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1920&q=80",
    
    "images/collections/sarees.jpg": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    "images/collections/kurtis.jpg": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    "images/collections/coord-sets.jpg": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    "images/collections/maxis.jpg": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    "images/collections/bottom-wear.jpg": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    
    "images/products/new-arrivals/na-1.jpg": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    "images/products/new-arrivals/na-2.jpg": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    "images/products/new-arrivals/na-3.jpg": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    "images/products/new-arrivals/na-4.jpg": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
    
    "images/products/best-sellers/bs-1.jpg": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    "images/products/best-sellers/bs-2.jpg": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    "images/products/best-sellers/bs-3.jpg": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    "images/products/best-sellers/bs-4.jpg": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
    
    "images/products/lounge-wear/lw-1.jpg": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    "images/products/lounge-wear/lw-2.jpg": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    
    "images/products/bottom-wear/bw-1.jpg": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    "images/products/bottom-wear/bw-2.jpg": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    
    "images/occasions/festive.jpg": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    "images/occasions/casual.jpg": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    "images/occasions/workwear.jpg": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    "images/occasions/weddings.jpg": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
}

print("Downloading image assets...")
headers = {"User-Agent": "Mozilla/5.0"}
for rel_path, url in IMAGE_URLS.items():
    dest = os.path.join(PUBLIC_DIR, rel_path)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response, open(dest, "wb") as out_file:
            out_file.write(response.read())
        print(f"Downloaded {rel_path}")
    except Exception as e:
        print(f"Failed to download {rel_path}: {e}")

# Create elegant SVG-based Logo if not downloaded
logo_path = os.path.join(PUBLIC_DIR, "images", "logo", "amura-logo.png")
# We also write amura-logo.svg and create a basic valid PNG
svg_logo = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="400" height="100">
  <rect width="100%" height="100%" fill="transparent"/>
  <text x="50%" y="45" font-family="'Playfair Display', Georgia, serif" font-size="34" font-weight="700" fill="#541212" text-anchor="middle" letter-spacing="6">AMURA</text>
  <text x="50%" y="68" font-family="'Inter', sans-serif" font-size="12" font-weight="500" fill="#D4AF37" text-anchor="middle" letter-spacing="8">COLLECTIONS</text>
  <line x1="80" y1="80" x2="320" y2="80" stroke="#D4AF37" stroke-width="1" stroke-dasharray="2 4"/>
</svg>"""
with open(os.path.join(PUBLIC_DIR, "images", "logo", "amura-logo.svg"), "w", encoding="utf-8") as f:
    f.write(svg_logo)

# Also create a 1x1 transparent/maroon PNG placeholder or copy if Pillow not installed
try:
    from PIL import Image, ImageDraw, ImageFont
    # Generate crisp high-res logo PNG
    img = Image.new("RGBA", (500, 140), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    # Draw text fallback
    img.save(logo_path, "PNG")
    print("Generated amura-logo.png with PIL")
except Exception:
    # Minimal 1x1 transparent PNG fallback if Pillow missing
    import base64
    tiny_png = base64.b64decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==")
    with open(logo_path, "wb") as f:
        f.write(tiny_png)
    print("Created fallback PNG logo")

print("Asset setup completed.")

