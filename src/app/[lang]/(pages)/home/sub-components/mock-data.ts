import { imgService1, imgService2, imgService3, imgService4 } from '@/assets/images'

export const servicesMockup = [
  {
    id: 1,
    order: 3,
    title: 'BOTOX',
    price: 4999,
    description:
      'โบท็อกซ์เป็นการรักษาด้านความงามที่ใช้เพื่อลดเลือนริ้วรอยบนใบหน้าและเส้นริ้วต่าง ๆ.',
    imgSrc: imgService1,
    link: '/services/botox',
  },
  {
    id: 2,
    order: 6,
    title: 'Dermal Filler',
    price: 4999,
    description:
      'เดอร์มอลฟิลเลอร์ใช้เพื่อเติมเต็มและฟื้นฟูความเต่งตึงบนใบหน้า ช่วยให้ผิวเรียบเนียนและเพิ่มความคมชัดให้ใบหน้า.',
    imgSrc: imgService2,
    link: '/services/dermal-filler',
  },
  {
    id: 3,
    order: 1,
    title: 'Collagen Biostimulators',
    price: 4999,
    description:
      'คอลลาเจนไบโอสติมูเลเตอร์ช่วยกระตุ้นการผลิตคอลลาเจนตามธรรมชาติ ทำให้ผิวมีความยืดหยุ่นและแข็งแรงขึ้น.',
    imgSrc: imgService3,
    link: '/services/collagen-biostimulators',
  },
  {
    id: 4,
    order: 8,
    title: 'Ultraformer',
    price: 4999,
    description:
      'อัลตราฟอร์เมอร์เป็นการรักษาที่ไม่รุกรานโดยใช้เทคโนโลยีอัลตราซาวด์เพื่อยกกระชับผิว.',
    imgSrc: imgService4,
    link: '/services/ultraformer',
  },
  {
    id: 5,
    order: 2,
    title: 'Mesofat',
    price: 2999,
    description: 'เมโสแฟตเป็นการรักษาที่ใช้เพื่อลดไขมันเฉพาะจุดและปรับรูปทรงของร่างกาย.',
    imgSrc: imgService1,
    link: '/services/mesofat',
  },
  {
    id: 6,
    order: 4,
    title: 'HIFU',
    price: 5999,
    description:
      'HIFU (High-Intensity Focused Ultrasound) เป็นการยกกระชับใบหน้าแบบไม่ผ่าตัดที่ช่วยยกและกระชับผิว.',
    imgSrc: imgService2,
    link: '/services/hifu',
  },
  {
    id: 7,
    order: 5,
    title: 'Thermage',
    price: 7999,
    description:
      'Thermage เป็นกระบวนการที่ไม่รุกรานที่ใช้พลังงานคลื่นวิทยุเพื่อกระชับและเรียบเนียนผิว.',
    imgSrc: imgService3,
    link: '/services/thermage',
  },
  {
    id: 8,
    order: 7,
    title: 'PRP Therapy',
    price: 6999,
    description:
      'PRP Therapy (Platelet-Rich Plasma) เป็นการรักษาที่ใช้เลือดของคุณเองเพื่อฟื้นฟูผิว.',
    imgSrc: imgService4,
    link: '/services/prp-therapy',
  },
]
