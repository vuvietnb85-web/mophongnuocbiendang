export type Place = {
  id: string;
  name: string;
  lon: number;
  lat: number;
  /** Mét so với mực nước trung bình — minh họa, không phải cao độ trắc địa. */
  elev: number;
  group: "ĐBSCL" | "Sông Hồng" | "Miền Trung" | "Biển" | "Đảo";
};

export const PLACES: Place[] = [
  { id: "camau", name: "Cà Mau", lon: 105.15, lat: 9.18, elev: 0.7, group: "ĐBSCL" },
  { id: "baclieu", name: "Bạc Liêu", lon: 105.72, lat: 9.28, elev: 0.9, group: "ĐBSCL" },
  { id: "soctrang", name: "Sóc Trăng", lon: 105.97, lat: 9.6, elev: 1.0, group: "ĐBSCL" },
  { id: "cantho", name: "Cần Thơ", lon: 105.75, lat: 10.03, elev: 1.4, group: "ĐBSCL" },
  { id: "bentre", name: "Bến Tre", lon: 106.37, lat: 10.24, elev: 1.1, group: "ĐBSCL" },
  { id: "mytho", name: "Mỹ Tho", lon: 106.36, lat: 10.36, elev: 1.3, group: "ĐBSCL" },
  { id: "hcmc", name: "TP. Hồ Chí Minh", lon: 106.7, lat: 10.78, elev: 2.4, group: "ĐBSCL" },
  { id: "vungtau", name: "Vũng Tàu", lon: 107.08, lat: 10.35, elev: 3.5, group: "ĐBSCL" },
  { id: "haiphong", name: "Hải Phòng", lon: 106.68, lat: 20.86, elev: 2.0, group: "Sông Hồng" },
  { id: "thaibinh", name: "Thái Bình", lon: 106.34, lat: 20.45, elev: 1.3, group: "Sông Hồng" },
  { id: "namdinh", name: "Nam Định", lon: 106.17, lat: 20.42, elev: 1.4, group: "Sông Hồng" },
  { id: "ninhbinh", name: "Ninh Bình", lon: 105.97, lat: 20.25, elev: 2.0, group: "Sông Hồng" },
  { id: "hanoi", name: "Hà Nội", lon: 105.85, lat: 21.03, elev: 9, group: "Sông Hồng" },
  { id: "hue", name: "Huế", lon: 107.58, lat: 16.46, elev: 2.6, group: "Miền Trung" },
  { id: "hoian", name: "Hội An", lon: 108.33, lat: 15.88, elev: 1.8, group: "Miền Trung" },
  { id: "danang", name: "Đà Nẵng", lon: 108.21, lat: 16.07, elev: 3.8, group: "Miền Trung" },
  { id: "quynhon", name: "Quy Nhơn", lon: 109.22, lat: 13.77, elev: 3.2, group: "Miền Trung" },
  { id: "nhatrang", name: "Nha Trang", lon: 109.19, lat: 12.24, elev: 3.4, group: "Miền Trung" },
  { id: "phanthiet", name: "Phan Thiết", lon: 108.1, lat: 10.93, elev: 4.5, group: "Miền Trung" },
  { id: "hoangsa", name: "Hoàng Sa", lon: 112.34, lat: 16.83, elev: 3.0, group: "Biển" },
  { id: "truongsa", name: "Trường Sa", lon: 111.92, lat: 8.64, elev: 2.2, group: "Biển" },
  { id: "phuquoc", name: "Phú Quốc", lon: 103.99, lat: 10.22, elev: 5.5, group: "Đảo" },
];

export type Scenario = {
  id: string;
  label: string;
  rise: number;
  note: string;
};

export const SCENARIOS: Scenario[] = [
  { id: "now", label: "Nay", rise: 0, note: "Mốc mực nước trung bình, khoảng 2026." },
  {
    id: "y2050",
    label: "2050",
    rise: 0.32,
    note: "Khoảng giữa các lộ trình phát thải tới giữa thế kỷ. Không phải một con số chắc.",
  },
  {
    id: "y2100",
    label: "2100",
    rise: 0.85,
    note: "Cận cao của kịch bản phát thải cao tới 2100 (IPCC AR6), chưa kể lún đất.",
  },
  {
    id: "ice",
    label: "+2 m",
    rise: 2,
    note: "Nhánh hiếm: băng tan nhanh. Không phải dự báo trung bình cho năm 2100.",
  },
  {
    id: "long",
    label: "+5 m",
    rise: 5,
    note: "Nhiều thế kỷ nếu các tảng băng lớn mất ổn định. Chỉ để thấy địa hình thấp.",
  },
];

export type ViewId = "wide" | "mekong" | "red" | "central" | "hoangsa" | "truongsa";

export const VIEWS: { id: ViewId; label: string; lon: number; lat: number; radius: number; phi: number; theta: number }[] =
  [
    { id: "wide", label: "Toàn vực", lon: 111.6, lat: 13.6, radius: 15.2, phi: 0.58, theta: 0.22 },
    { id: "mekong", label: "Cửu Long", lon: 105.9, lat: 9.85, radius: 4.15, phi: 0.74, theta: -0.35 },
    { id: "red", label: "Sông Hồng", lon: 106.35, lat: 20.7, radius: 3.55, phi: 0.72, theta: 0.15 },
    { id: "central", label: "Miền Trung", lon: 108.55, lat: 15.2, radius: 5.1, phi: 0.78, theta: -0.55 },
    { id: "hoangsa", label: "Hoàng Sa", lon: 112.3, lat: 16.7, radius: 2.55, phi: 0.86, theta: 0.4 },
    { id: "truongsa", label: "Trường Sa", lon: 113.6, lat: 9.7, radius: 3.35, phi: 0.8, theta: 0.25 },
  ];
