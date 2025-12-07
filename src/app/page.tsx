"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { openWhatsApp } from "@/lib/whatsapp";
import { Phone, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Bawang Goreng 100gr",
      price: "Rp 15.000",
      highlight: "Cocok untuk coba dulu",
      image: "/crispy-golden-fried-onions-in-small-package.jpeg",
      weight: "Isi ±100 gram",
      description: "Cocok untuk 2–3 porsi makan keluarga kecil.",
    },
    {
      id: 2,
      name: "Bawang Goreng 150gr",
      price: "Rp 35.000",
      highlight: "Paling Laris",
      image: "/crispy-golden-fried-onions-in-medium-package.jpeg",
      weight: "Isi ±150 gram",
      description: "Pilihan ideal untuk 3–5 porsi lauk dan topping harian.",
    },
    {
      id: 3,
      name: "Bawang Goreng 450gr",
      price: "Rp 65.000",
      highlight: "Hemat untuk stok bulanan",
      image: "/crispy-golden-fried-onions-in-large-package.jpeg",
      weight: "Isi ±450 gram",
      description: "Ukuran hemat untuk stok 2–4 minggu atau acara keluarga.",
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

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sticky CTA */}
      <motion.div
        className="fixed inset-x-4 bottom-4 z-50 md:hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="bg-card/95 backdrop-blur-sm border border-border/70 rounded-full shadow-lg px-4 py-3 flex items-center justify-between gap-3">
          <div className="text-left">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Bawang Goreng Mb Dju
            </p>
            <p className="text-xs text-muted-foreground">
              Mulai dari <span className="font-semibold">Rp 15.000</span>
            </p>
          </div>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap"
            onClick={() => openWhatsApp()}
          >
            <Phone className="mr-2 h-4 w-4" />
            Chat WA
          </Button>
        </div>
      </motion.div>

      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative bg-gradient-to-br from-card to-background py-20 lg:py-32 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                className="space-y-8 lg:pr-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-sm px-4 py-2">
                  100% Rumahan & Tanpa Pengawet
                </Badge>
                <div className="space-y-6">
                  <p className="text-sm font-semibold tracking-wide uppercase text-primary/90">
                    Bawang Goreng Mb Dju • Temanggung
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                    Bawang Goreng
                    <span className="text-primary block">Renyah & Gurih</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed">
                    Dibuat dengan resep turun temurun menggunakan bawang merah
                    pilihan. Digoreng dengan minyak berkualitas hingga golden
                    crispy sempurna.
                  </p>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Cocok untuk topping nasi, mie, soto, bakso, dan masakan
                    favorit keluarga Anda di rumah.
                  </p>
                </div>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg"
                    onClick={() => openWhatsApp()}
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Pesan Sekarang via WhatsApp
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Mulai dari <span className="font-semibold">Rp 15.000</span>{" "}
                    • Siap kirim dari Temanggung, Jawa Tengah.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative lg:pl-8"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Product Section */}
        <section id="keunggulan" className="py-20 lg:py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
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
              {[
                {
                  icon: "🧅",
                  title: "Bawang Merah Pilihan",
                  description:
                    "Menggunakan bawang merah lokal terbaik yang dipilih langsung dari petani",
                },
                {
                  icon: "✨",
                  title: "Renyah Tahan Lama",
                  description:
                    "Digoreng dengan teknik khusus untuk menghasilkan kerenyahan yang awet lebih lama",
                },
                {
                  icon: "🌿",
                  title: "Tanpa Pengawet",
                  description:
                    "100% alami tanpa bahan kimia berbahaya, aman untuk seluruh keluarga",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                    <CardContent className="p-8 text-center flex h-full flex-col">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                      <div className="mt-6 flex-1 space-y-3">
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section id="cerita" className="py-16 lg:py-20 px-4 bg-card/40">
          <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.3fr_minmax(0,1fr)] items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-sm font-semibold tracking-wide uppercase text-primary/90">
                Sejak 2018 di Temanggung
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Cerita di Balik Bawang Goreng Mb Dju
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Bermula dari dapur rumah di Temanggung, Mb Dju meracik bawang
                goreng untuk keluarga dan tetangga sekitar. Dari permintaan
                kecil tersebut, lahirlah produksi rumahan yang tetap
                mempertahankan rasa autentik dan perhatian pada kebersihan.
              </p>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                Setiap batch digoreng dalam jumlah terbatas agar kualitas
                kerenyahan dan rasa tetap konsisten. Kami percaya, makanan yang
                baik dimulai dari niat yang baik dan bahan yang jujur.
              </p>
            </motion.div>
            <div className="grid gap-4">
              {[
                {
                  title: "Produksi rumahan higienis",
                  description:
                    "Proses digoreng dan dikemas secara rapi di dapur rumahan dengan perhatian pada kebersihan dan kualitas minyak.",
                },
                {
                  title: "Rasa yang konsisten",
                  description:
                    "Menggunakan resep yang sama dari awal usaha, sehingga pelanggan mendapatkan rasa yang familiar di setiap pesanan.",
                },
                {
                  title: "Dekat dengan pelanggan",
                  description:
                    "Pesanan bisa dikonsultasikan langsung via WhatsApp, memudahkan untuk kebutuhan hampers, acara keluarga, atau stok bulanan.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="border-border/60 bg-background/80">
                    <CardContent className="p-5 space-y-2">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produk" className="py-20 lg:py-24 px-4 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Pilihan Ukuran
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pilih ukuran sesuai kebutuhan harian, mingguan, atau stok
                bulanan Anda
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="h-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.1 * index,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background group relative h-full flex flex-col gap-0 py-0">
                    <div className="aspect-[4/3] overflow-hidden bg-card/50">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        width={500}
                        height={500}
                      />
                    </div>
                    {product.highlight && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                          {product.highlight}
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-8 flex flex-1 flex-col justify-between gap-6">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="font-bold text-xl lg:text-2xl">
                            {product.name}
                          </h3>
                          {product.weight ? (
                            <p className="text-xs font-semibold tracking-wide text-primary/90 uppercase">
                              {product.weight}
                            </p>
                          ) : null}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                      <div className="mt-2 flex flex-col gap-3 border-t border-border/50 pt-4 sm:flex-row sm:items-center sm:justify-center">
                        <div className="space-y-1">
                          <span className="block text-2xl lg:text-3xl font-bold text-primary text-center">
                            {product.price}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            Harga per kemasan - Belum dengan ongkir
                          </span>
                        </div>
                      </div>
                      <Button
                        className="bg-primary hover:bg-primary/90 px-6 py-3 text-base font-semibold w-full sm:w-auto justify-center"
                        onClick={() => openWhatsApp(product.name)}
                      >
                        Pesan via WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimoni" className="py-20 lg:py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-sm font-semibold tracking-wide uppercase text-primary/90">
                Mereka sudah coba dan suka
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Kata Pelanggan Kami
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kepuasan pelanggan adalah prioritas utama kami. Berikut beberapa
                cerita mereka yang sudah menikmati bawang goreng Mb Dju.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-8 flex h-full flex-col">
                      <div className="flex-1 space-y-6">
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
                      </div>
                      <p className="mt-6 font-bold text-base text-center lg:text-left text-primary">
                        - {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
