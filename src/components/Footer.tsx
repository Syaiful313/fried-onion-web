"use client";

import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-card/95 py-10 lg:py-16 px-4 border-t border-border/60 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto space-y-10 lg:space-y-12">
        <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-[2fr_1.4fr_1.2fr] lg:gap-10 lg:text-left">
          {/* Brand Section */}
          <div className="space-y-4 lg:space-y-5">
            <h3 className="font-bold text-xl lg:text-2xl text-primary">
              Bawang Goreng Mb Dju
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base px-2 lg:px-0">
              Bawang goreng rumahan berkualitas dengan rasa renyah dan gurih,
              dibuat dari bawang merah pilihan untuk melengkapi hidangan
              keluarga Indonesia.
            </p>
            <p className="text-xs text-muted-foreground lg:text-sm">
              Diproduksi dengan jumlah terbatas agar kualitas rasa dan
              kerenyahan selalu terjaga di setiap pesanan.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 lg:space-y-5">
            <h4 className="font-bold text-base lg:text-lg">Kontak Kami</h4>
            <div className="space-y-3 lg:space-y-4 text-muted-foreground">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 lg:h-10 lg:w-10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium text-sm lg:text-base">
                  085-225-252-958
                </span>
              </div>
              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 lg:h-10 lg:w-10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium text-sm leading-relaxed lg:text-base">
                  Temanggung, Jawa Tengah, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Operating Hours Section */}
          <div className="space-y-4 lg:space-y-5">
            <h4 className="font-bold text-base lg:text-lg">Jam Operasional</h4>
            <div className="space-y-1.5 text-sm leading-relaxed text-muted-foreground lg:space-y-2 lg:text-base">
              <p className="font-medium">Senin - Jumat: 08:00 - 17:00</p>
              <p className="font-medium">Sabtu: 08:00 - 15:00</p>
              <p className="font-medium">Minggu: Libur</p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground lg:flex-row lg:gap-4 lg:text-left lg:text-sm">
          <p className="px-2 lg:px-0">
            © 2018 Bawang Goreng Mb Dju. Dibuat dengan ❤️ untuk keluarga
            Indonesia.
          </p>
          <p className="px-2 lg:px-0">
            Temanggung • Produksi rumahan higienis • Bawang merah pilihan
          </p>
        </div>
      </div>
    </footer>
  );
}
