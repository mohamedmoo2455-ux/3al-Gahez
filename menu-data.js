// 1. بيانات المطاعم
const restaurants = [
    { id: 1, name: 'أفندينا', emoji: '🥘', distance: 'داخل المعهد' },
    { id: 2, name: 'سبايسي كريب', emoji: '🌮', distance: '5 دقايق' },
    { id: 3, name: 'الطبّاخ', emoji: '🍗', distance: '10 دقايق' }
];

// 2. أقسام كل مطعم (شريط الفلترة اللي فوق)
const restaurantCategories = {
    1: ['الكل', 'كشري', 'طواجن', 'حواوشي'], // أقسام أفندينا (كملها براحتك)
    2: ['الكل', 'ساندوتشات فرنساوي', 'ساندوتشات سوري', 'كريب أكسترا', 'كريب ع كيفك', 'كريب الطاقة', 'برجر وحواوشي'], // أقسام سبايسي كريب
    3: ['الكل', 'مشويات', 'وجبات'] // أقسام الطباخ
};

// 3. المنيو الكامل
const menus = {
    // ================== منيو أفندينا (مطعم 1) ==================
    1: [
        { id: 101, name: 'كشري كبير', category: 'كشري', price: 30, emoji: '🥘', desc: 'كشري مصري مع دقة وصلصة', hasSpicy: true, addons: [{ name: 'صلصة زيادة', price: 5 }] },
        // --- قسم طواجن ---
        { id: 102, name: 'طاجن لحمه', category: 'طواجن', price: 50, emoji: '🍲', desc: 'طاجن ملوخية مع أرز أبيض', hasSpicy: false, addons: [{ name: 'أرز زيادة', price: 10 }] },
        { id: 103, name: 'طاجن كبده', category: 'طواجن', price: 60, emoji: '🍲', desc: 'كوارع مطبوخة مع صوص طماطم', hasSpicy: true, addons: [{ name: 'خبز زيادة', price: 5 }] },
        { id: 104, name: 'طاجن فراخ', category: 'حواوشي', price: 35, emoji: '🥙', desc: 'حواوشي بلدي مع صوص طماطم', hasSpicy: true, addons: [{ name: 'بطاطس زيادة', price: 10 }] },
        { id: 105, name: 'طاجن ساده', category: 'كشري', price: 20, emoji: '🥘', desc: 'كشري مصري مع دقة وصلصة', hasSpicy: true, addons: [{ name: 'صلصة زيادة', price: 5 }] },
        { id: 106, name: 'طاجن سوسيس', category: 'طواجن', price: 45, emoji: '🍲', desc: 'ملوخية مع أرز أبيض', hasSpicy: false, addons: [{ name: 'أرز زيادة', price: 10 }] },
        { id: 103, name: 'طاجن سجق', category: 'طواجن', price: 60, emoji: '🍲', desc: 'كوارع مطبوخة مع صوص طماطم', hasSpicy: true, addons: [{ name: 'خبز زيادة', price: 5 }] },
        // --- الكشري ---
        { id: 104, name: 'كشري صغير', category: 'كشري', price: 20, emoji: '🥘', desc: 'كشري مصري مع دقة وصلصة', hasSpicy: true, addons: [{ name: 'صلصة زيادة', price: 5 }] },
    ],
    // ================== منيو سبايسي كريب (مطعم 2 - داتا حقيقية) ==================
    2: [
        // --- قسم ساندوتشات فرنساوي ---
        { id: 201, name: 'ساندوتش كبدة', category: 'ساندوتشات فرنساوي', price: 20, emoji: '🥖', desc: 'كبدة اسكندراني في عيش فرنساوي', hasSpicy: true, addons: [{ name: 'مايونيز زيادة', price: 5 }] },
        { id: 202, name: 'ساندوتش كفتة', category: 'ساندوتشات فرنساوي', price: 20, emoji: '🥖', desc: 'كفتة مشوية في عيش فرنساوي', hasSpicy: true, addons: [{ name: 'طحينة زيادة', price: 5 }] },
        { id: 203, name: 'ساندوتش بانيه', category: 'ساندوتشات فرنساوي', price: 30, emoji: '🥖', desc: 'فراخ بانيه مقرمشة', hasSpicy: true, addons: [{ name: 'كاتشب ومايونيز', price: 5 }] },
        { id: 204, name: 'ساندوتش زنجر', category: 'ساندوتشات فرنساوي', price: 35, emoji: '🥖', desc: 'فراخ زنجر حارة', hasSpicy: true, addons: [{ name: 'إضافة صوص شيدر', price: 10 }] },

        // --- قسم ساندوتشات سوري ---
        { id: 205, name: 'ساندوتش بانيه سوري', category: 'ساندوتشات سوري', price: 35, emoji: '🌯', desc: 'بانيه في عيش صاج سوري', hasSpicy: true, addons: [{ name: 'تومية زيادة', price: 5 }, { name: 'بطاطس جوه الساندوتش', price: 5 }] },
        { id: 206, name: 'ساندوتش شاورما فراخ', category: 'ساندوتشات سوري', price: 35, emoji: '🌯', desc: 'شاورما فراخ مع تومية ومخلل', hasSpicy: true, addons: [{ name: 'تومية زيادة', price: 5 }, { name: 'إضافة صوص شيدر', price: 10 }] },

        // --- قسم كريب أكسترا (الأسعار للسادة، والرومي والموتزاريلا في الإضافات) ---
        { id: 207, name: 'كريب فراخ بانيه', category: 'كريب أكسترا', price: 75, emoji: '🌮', desc: 'قطع بانيه مقرمشة مع صوصات', hasSpicy: true, addons: [{ name: 'إضافة جبنة رومي 🧀', price: 5 }, { name: 'إضافة موتزاريلا 🧀', price: 10 }, { name: 'إضافة تركي مدخن', price: 10 }] },
        { id: 208, name: 'كريب فراخ كرسبي حار', category: 'كريب أكسترا', price: 80, emoji: '🌮', desc: 'فراخ كرسبي سبايسي', hasSpicy: true, addons: [{ name: 'إضافة جبنة رومي 🧀', price: 5 }, { name: 'إضافة موتزاريلا 🧀', price: 10 }, { name: 'صوص شيدر', price: 10 }] },
        { id: 209, name: 'كريب شاورما فراخ', category: 'كريب أكسترا', price: 80, emoji: '🌮', desc: 'شاورما فراخ متبلة', hasSpicy: true, addons: [{ name: 'إضافة جبنة رومي 🧀', price: 5 }, { name: 'إضافة موتزاريلا 🧀', price: 10 }] },
        { id: 210, name: 'كريب ميكس جبن', category: 'كريب أكسترا', price: 75, emoji: '🌮', desc: 'ميكس شيدر، رومي، موتزاريلا، كيري', hasSpicy: false, addons: [{ name: 'إضافة بسطرمة', price: 15 }] },

        // --- قسم كريب ع كيفك (الأحجام العائلية والميكسات) ---
        { id: 211, name: 'كريب جعفر العمدة', category: 'كريب ع كيفك', price: 95, emoji: '🌮', desc: 'برجر، بانيه، كرانشي، كوردون، سوسيس، بطاطس', hasSpicy: true, addons: [{ name: 'إضافة جبنة رومي 🧀', price: 5 }, { name: 'إضافة موتزاريلا 🧀', price: 10 }, { name: 'صوص شيدر', price: 10 }] },
        { id: 212, name: 'كريب ملوك الجدعنة', category: 'كريب ع كيفك', price: 100, emoji: '🌮', desc: 'كوردون، زنجر، سوسيس، فراخ، كفتة، بطاطس، شيدر', hasSpicy: true, addons: [{ name: 'إضافة جبنة رومي 🧀', price: 5 }, { name: 'إضافة موتزاريلا 🧀', price: 10 }] },
        { id: 213, name: 'كريب الأسطورة', category: 'كريب ع كيفك', price: 110, emoji: '🌮', desc: 'بانيه، زنجر، كوردون، شاورما، فراخ، بطاطس', hasSpicy: true, addons: [{ name: 'إضافة جبنة رومي 🧀', price: 5 }, { name: 'إضافة موتزاريلا 🧀', price: 10 }] },
        { id: 214, name: 'كريب العالمي', category: 'كريب ع كيفك', price: 125, emoji: '🌮', desc: 'بانيه، كرانشي، زنجر، كوردون، شاورما، شيش، هوت دوج، برجر', hasSpicy: true, addons: [{ name: 'إضافة جبنة رومي 🧀', price: 5 }, { name: 'إضافة موتزاريلا 🧀', price: 10 }] },

        // --- قسم كريب الطاقة (الحلو) ---
        { id: 215, name: 'كريب شيكولاتة نوتيلا سادة', category: 'كريب الطاقة', price: 35, emoji: '🍫', desc: 'نوتيلا أصلية سايحة', hasSpicy: false, addons: [{ name: 'إضافة مكسرات', price: 10 }, { name: 'إضافة هوهوز', price: 10 }] },
        { id: 216, name: 'كريب شيكولاتة نوتيلا بالموز', category: 'كريب الطاقة', price: 45, emoji: '🍌', desc: 'نوتيلا مع قطع الموز الطازجة', hasSpicy: false, addons: [{ name: 'إضافة مكسرات', price: 10 }] },
        { id: 217, name: 'كريب لوتس', category: 'كريب الطاقة', price: 50, emoji: '🍪', desc: 'شيكولاتة نوتيلا مع زبدة وبسكوت اللوتس', hasSpicy: false, addons: [] },

        // --- قسم برجر وحواوشي ---
        { id: 218, name: 'برجر كلاسيك سادة', category: 'برجر وحواوشي', price: 35, emoji: '🍔', desc: 'شريحة برجر مع صوص كلاسيك', hasSpicy: true, addons: [{ name: 'إضافة صوص شيدر', price: 10 }] },
        { id: 219, name: 'برجر جامبو', category: 'برجر وحواوشي', price: 60, emoji: '🍔', desc: 'برجر حجم كبير', hasSpicy: true, addons: [{ name: 'إضافة جبنة', price: 10 }] },
        { id: 220, name: 'حواوشي', category: 'برجر وحواوشي', price: 35, emoji: '🥙', desc: 'حواوشي بلدي', hasSpicy: true, addons: [{ name: 'إضافة جبنة رومي', price: 10 }, { name: 'إضافة موتزاريلا', price: 15 }] },
    ],

    // ================== منيو الطباخ (مطعم 3) ==================
    3: [
        { id: 301, name: 'نص فرخة مشوية', category: 'مشويات', price: 120, emoji: '🍗', desc: 'مشوية على الفحم مع طحينة وعيش', hasSpicy: false, addons: [{ name: 'تومية', price: 5 }, { name: 'بيبسي', price: 15 }] }
        
    ]
};