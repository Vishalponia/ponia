from PIL import Image
import colorsys
src = Image.open("public/images/poniaglogo (2).png").convert("RGBA")
im = src.copy(); px = im.load()
W,H = im.size
def in_hing(x,y): return 180 <= x <= 328 and 88 <= y <= 205
for y in range(H):
    for x in range(W):
        r,g,b,a = px[x,y]
        if a == 0: continue
        h,l,s = colorsys.rgb_to_hls(r/255,g/255,b/255)
        hd = h*360
        if in_hing(x,y) and l <= 0.82: continue
        if (hd >= 330 or hd <= 24) and s > 0.12:
            if l > 0.8:
                ns, nl = min(s, 0.75), min(1, l + (1-l)*0.35)
            else:
                ns, nl = min(1, s*1.15), l*0.9
            r2,g2,b2 = colorsys.hls_to_rgb(222/360, nl, ns)
            px[x,y] = (round(r2*255), round(g2*255), round(b2*255), a)
        elif l < 0.3 and s <= 0.3:
            r2,g2,b2 = colorsys.hls_to_rgb(222/360, max(l,0.12), 0.55)
            px[x,y] = (round(r2*255), round(g2*255), round(b2*255), a)
im = im.crop(im.getbbox())
w,h = im.size; side = max(w,h)
sq = Image.new("RGBA",(side,side),(0,0,0,0)); sq.paste(im,((side-w)//2,(side-h)//2))
sq.resize((384,384), Image.LANCZOS).save("public/images/poniag-logo.png", optimize=True)
sq.resize((192,192), Image.LANCZOS).save("public/images/poniag-logo-192.png", optimize=True)
sq.resize((64,64), Image.LANCZOS).save("public/favicon.png", optimize=True)
sq.resize((180,180), Image.LANCZOS).save("public/apple-touch-icon.png", optimize=True)
sq.save("/tmp/shots/logo-final2.png")
