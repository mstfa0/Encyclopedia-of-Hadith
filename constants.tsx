
import { Category, Book } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'books',
    title: 'كتب الحديث',
    description: 'تصفح أمهات الكتب مثل الصحيحين والسنن والمسانيد.',
    icon: 'menu_book',
    color: 'bg-primary/20',
    imageUrl: 'https://picsum.photos/seed/books/400/600',
  },
  {
    id: 'chains',
    title: 'شجرة الأسانيد',
    description: 'قاعدة بيانات تفاعلية تربط الرواة والمشايخ والتلاميذ.',
    icon: 'account_tree',
    color: 'bg-blue-500/20',
    imageUrl: 'https://picsum.photos/seed/tree/400/600',
  },
  {
    id: 'biographies',
    title: 'تراجم العلماء',
    description: 'سير مفصلة لرواة الحديث والجرح والتعديل.',
    icon: 'person_search',
    color: 'bg-purple-500/20',
    imageUrl: 'https://picsum.photos/seed/person/400/600',
  },
  {
    id: 'explanations',
    title: 'شروح الحديث',
    description: 'شروح صوتية ومرئية لأهم كتب السنة النبوية.',
    icon: 'headphones',
    color: 'bg-orange-500/20',
    imageUrl: 'https://picsum.photos/seed/audio/400/600',
  },
];

export const SIX_BOOKS: Book[] = [
  { title: 'صحيح البخاري', author: 'الإمام البخاري' },
  { title: 'صحيح مسلم', author: 'الإمام مسلم' },
  { title: 'سنن أبي داود', author: 'أبو داود' },
  { title: 'جامع الترمذي', author: 'الترمذي' },
  { title: 'سنن النسائي', author: 'النسائي' },
  { title: 'سنن ابن ماجه', author: 'ابن ماجه' },
];

export const INITIAL_HADITH = {
  text: '"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا، أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ"',
  source: 'رواه البخاري (1) ومسلم (1907)',
  grade: 'صحيح' as const,
};
