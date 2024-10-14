import {
  imgService1,
  imgService2,
  imgService3,
  imgService4,
  imgBlog1,
  imgBlog2,
  imgBlog3,
  imgBlog4,
} from '@/assets/images'

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

export const blogsMockup = [
  {
    id: 1,
    order: 3,
    title: 'โบท็อกซ์: วิธีการทำงานและข้อดี',
    description:
      'บทความนี้จะพาคุณรู้จักกับโบท็อกซ์ วิธีการทำงาน และข้อดีของการรักษาเพื่อลดเลือนริ้วรอยบนใบหน้า.',
    imgSrc: imgBlog1,
    link: '/blogs/botox',
  },
  {
    id: 2,
    order: 6,
    title: 'เดอร์มอลฟิลเลอร์: ทำไมถึงเป็นที่นิยม',
    description:
      'ทำความรู้จักกับเดอร์มอลฟิลเลอร์ และเหตุผลที่ทำให้การเติมเต็มและฟื้นฟูความเต่งตึงบนใบหน้าเป็นที่นิยม.',
    imgSrc: imgBlog2,
    link: '/blogs/dermal-filler',
  },
  {
    id: 3,
    order: 1,
    title: 'คอลลาเจนไบโอสติมูเลเตอร์: เพิ่มความยืดหยุ่นให้ผิว',
    description:
      'บทความนี้อธิบายเกี่ยวกับคอลลาเจนไบโอสติมูเลเตอร์ และวิธีการที่ช่วยกระตุ้นการผลิตคอลลาเจนในผิว.',
    imgSrc: imgBlog3,
    link: '/blogs/collagen-biostimulators',
  },
  {
    id: 4,
    order: 8,
    title: 'อัลตราฟอร์เมอร์: ยกกระชับผิวแบบไม่เจ็บ',
    description:
      'เรียนรู้เกี่ยวกับอัลตราฟอร์เมอร์ การรักษาที่ไม่ต้องผ่าตัดและใช้เทคโนโลยีอัลตราซาวด์เพื่อยกกระชับผิว.',
    imgSrc: imgBlog4,
    link: '/blogs/ultraformer',
  },
  {
    id: 5,
    order: 2,
    title: 'เมโสแฟต: ลดไขมันเฉพาะจุด',
    description:
      'วิธีการทำเมโสแฟตเพื่อกำจัดไขมันเฉพาะจุดและปรับรูปทรงของร่างกายอย่างมีประสิทธิภาพ.',
    imgSrc: imgBlog1,
    link: '/blogs/mesofat',
  },
  {
    id: 6,
    order: 4,
    title: 'HIFU: เทคโนโลยียกกระชับผิว',
    description:
      'HIFU (High-Intensity Focused Ultrasound) เทคโนโลยีที่ช่วยยกกระชับผิวหน้าโดยไม่ต้องผ่าตัด.',
    imgSrc: imgBlog2,
    link: '/blogs/hifu',
  },
  {
    id: 7,
    order: 5,
    title: 'Thermage: การกระชับผิวด้วยพลังงานคลื่นวิทยุ',
    description:
      'บทความนี้จะพาคุณรู้จักกับ Thermage และวิธีการที่ใช้พลังงานคลื่นวิทยุเพื่อกระชับและเรียบเนียนผิว.',
    imgSrc: imgBlog3,
    link: '/blogs/thermage',
  },
  {
    id: 8,
    order: 7,
    title: 'PRP Therapy: การฟื้นฟูผิวด้วยพลาสมา',
    description:
      'PRP Therapy (Platelet-Rich Plasma) คืออะไร และวิธีการใช้พลาสมาจากเลือดของคุณเองเพื่อฟื้นฟูผิว.',
    imgSrc: imgBlog4,
    link: '/blogs/prp-therapy',
  },
]
