"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Bawang Goreng 100gr",
      price: "Rp 15.000",
      image: "/crispy-golden-fried-onions-in-small-package.jpeg",
      description: "Porsi pas untuk keluarga kecil",
    },
    {
      id: 2,
      name: "Bawang Goreng 150gr",
      price: "Rp 35.000",
      image: "/crispy-golden-fried-onions-in-medium-package.jpeg",
      description: "Pilihan terpopuler untuk keluarga",
    },
    {
      id: 3,
      name: "Bawang Goreng 450gr",
      price: "Rp 65.000",
      image: "/crispy-golden-fried-onions-in-large-package.jpeg",
      description: "Hemat untuk kebutuhan bulanan",
    },
  ];

  const testimonials = [
    {
      name: "Ibu Sari",
      text: "Bawang gorengnya renyah banget dan gurih! Anak-anak suka banget pakai ini buat nasi goreng.",
      rating: 5,
    },
    {
      name: "Pak Budi",
      text: "Kualitas premium, tanpa bahan pengawet. Sudah langganan 6 bulan, selalu fresh!",
      rating: 5,
    },
    {
      name: "Ibu Maya",
      text: "Packaging rapi, pengiriman cepat. Rasanya authentic banget seperti buatan sendiri.",
      rating: 5,
    },
  ];

  const whatsappNumber = "6285225252958";
  const whatsappMessage = "Halo, saya ingin memesan bawang goreng";

  const handleWhatsAppClick = (productName?: string) => {
    const message = productName
      ? `Halo, saya ingin memesan ${productName}`
      : whatsappMessage;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-card to-background py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 lg:pr-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-sm px-4 py-2">
                100% Rumahan & Tanpa Pengawet
              </Badge>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Bawang Goreng
                  <span className="text-primary block">Renyah & Gurih</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed">
                  Dibuat dengan resep turun temurun menggunakan bawang merah
                  pilihan. Digoreng dengan minyak berkualitas hingga golden
                  crispy sempurna.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg"
                onClick={() => handleWhatsAppClick()}
              >
                <Phone className="mr-3 h-5 w-5" />
                Pesan Sekarang via WhatsApp
              </Button>
            </div>
            <div className="relative lg:pl-8">
              <div className="relative">
                <Image
                  src="/golden-crispy-fried-onions-in-bowl-with-steam.png"
                  alt="Bawang Goreng Renyah"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Product Section */}
      <section className="py-20 lg:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Kenapa Bawang Goreng Kami Spesial?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kualitas terbaik dengan proses pembuatan yang teliti dan
              bahan-bahan pilihan
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <span className="text-3xl">🧅</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-xl">Bawang Merah Pilihan</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Menggunakan bawang merah lokal terbaik yang dipilih langsung
                    dari petani
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <span className="text-3xl">✨</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-xl">Renyah Tahan Lama</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digoreng dengan teknik khusus untuk menghasilkan kerenyahan
                    yang awet
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <span className="text-3xl">🌿</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-xl">Tanpa Pengawet</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    100% alami tanpa bahan kimia berbahaya, aman untuk seluruh
                    keluarga
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Pilihan Ukuran
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tersedia dalam berbagai ukuran sesuai kebutuhan Anda
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-card/50">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={500}
                    height={500}
                  />
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl lg:text-2xl">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-2xl lg:text-3xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Button
                      className="bg-primary hover:bg-primary/90 px-6 py-3 text-base font-semibold"
                      onClick={() => handleWhatsAppClick(product.name)}
                    >
                      Pesan via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Kata Pelanggan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1 justify-center lg:justify-start">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed text-center lg:text-left">
                    "{testimonial.text}"
                  </blockquote>
                  <p className="font-bold text-base text-center lg:text-left text-primary">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 lg:py-20 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 text-center lg:text-left">
            {/* Brand Section */}
            <div className="space-y-4 lg:space-y-6">
              <h3 className="font-bold text-xl lg:text-2xl text-primary">
                Bawang Goreng Mb Dju
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base px-2 lg:px-0">
                Menghadirkan cita rasa autentik bawang goreng rumahan untuk
                keluarga Indonesia
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-4 lg:space-y-6">
              <h4 className="font-bold text-base lg:text-lg">Kontak Kami</h4>
              <div className="space-y-3 lg:space-y-4 text-muted-foreground">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm lg:text-base">
                    085-225-252-958
                  </span>
                </div>
                <div className="flex items-start justify-center lg:justify-start gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm lg:text-base leading-relaxed">
                    Temanggung, Jawa Tengah, Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Operating Hours Section */}
            <div className="space-y-4 lg:space-y-6">
              <h4 className="font-bold text-base lg:text-lg">
                Jam Operasional
              </h4>
              <div className="text-muted-foreground space-y-1.5 lg:space-y-2 leading-relaxed text-sm lg:text-base">
                <p className="font-medium">Senin - Jumat: 08:00 - 17:00</p>
                <p className="font-medium">Sabtu: 08:00 - 15:00</p>
                <p className="font-medium">Minggu: Libur</p>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-border/50 mt-8 lg:mt-16 pt-6 lg:pt-8 text-center">
            <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed px-2 lg:px-0">
              © 2018 Bawang Goreng Mb Dju. Dibuat dengan ❤️ untuk keluarga
              Indonesia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
