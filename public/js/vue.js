var vmContainer = new Vue({
    delimiters: ['{[', ']}'],
    el: '#app',
    data: {
        apps: [
            {
                id: 1,
                name: 'DiskCleaner',
                title: 'Cleaner One for iOS',
                subTitle: 'All-in-one photo cleaner and system manager',
                description: 'Detect and clean the duplicated/similar photos in your album, encrypt your photos, monitor your system status.',
                downloadLinks: ['#1','#2'],
                image: 'product-Mac_iOS-DiskCleaner.svg'
            },
            {
                id: 2,
                name: 'SecurePrivacy',
                title: 'VPN Proxy One for iOS',
                subTitle: 'Secure Browsing for your privacy',
                description: 'Effective protection of your privacy, Unlimited speed and data traffic, Simple and user-friendly design.',
                downloadLinks: ['#1'],
                image: 'product-Mac_iOS-SecurePrivacy.svg'
            }
        ],
        macApps: [
            {
                id: 1,
                title: 'Cleaner One - Disk Clean',
                description: 'All-in-one Disk Cleaning Manager for Mac',
                image: 'product-Mac_iOS-DiskCleaner.svg'
            },
            {
                id: 2,
                title: 'VPN Proxy One - Secure Privacy',
                description: 'Best Unlimited Virtual Private Network Services for Mac',
                image: 'product-Mac_iOS-SecurePrivacy.svg'
            },
            {
                id: 3,
                title: 'AdBlock One - Browser AdBlocker',
                description: 'Stop Annoying Online Ads and Speed Up Your Web Browser on Mac',
                image: 'product-Mac-BrowserAdBlocker.svg'
            },
            {
                id: 4,
                title: 'Antivirus One - Virus Cleaner',
                description: 'Get Protected from Any Kind of Malware on Mac',
                image: 'product-Mac-VirusCleaner.svg'
            },
        ],
        iosApps: [
            {
                id: 1,
                title: 'Cleaner One - Disk Clean',
                description: 'All-In-One Photo Cleaner And System Manager for iOS',
                image: 'product-Mac_iOS-DiskCleaner.svg'
            },
            {
                id: 2,
                title: 'VPN Proxy One - Secure Privacy',
                description: 'Secure Browsing for Your Privacy on iOS',
                image: 'product-Mac_iOS-SecurePrivacy.svg'
            }
        ],
        blogItems: [
            {
                id: 1,
                tags:['Cleaner One','User Guide'],
                title: 'How to clean my disk with cleaner one?',
                description: 'Cleaner One (Lite) is an all-in-one disk cleaning and optimization master. With the minimalist and easy-to-use interface, you can you can visualize...',
                photo: 'female.svg',
                creator: 'Cleaner One Assistant',
                createdDate: '2020-12-31',
                image: 'Cleaner-One.svg'
            },
            {
                id: 2,
                tags:['Cleaner One','User Guide'],
                title: 'How to clean my disk with cleaner one?',
                description: 'Cleaner One (Lite) is an all-in-one disk cleaning and optimization master. With the minimalist and easy-to-use interface, you can you can visualize...',
                photo: 'male.svg',
                creator: 'Cleaner One Assistant',
                createdDate: '2020-11-01',
                image: 'VPN-Proxy-One.svg'
            },
            {
                id: 3,
                tags:['Cleaner One','User Guide'],
                title: 'How to clean my disk with cleaner one?',
                description: 'Cleaner One (Lite) is an all-in-one disk cleaning and optimization master. With the minimalist and easy-to-use interface, you can you can visualize...',
                photo: 'female.svg',
                creator: 'Cleaner One Assistant',
                createdDate: '2020-08-30',
                image: 'Antivirus-One.svg'
            },
            {
                id: 4,
                tags:['Cleaner One','User Guide'],
                title: 'How to clean my disk with cleaner one?',
                description: 'Cleaner One (Lite) is an all-in-one disk cleaning and optimization master. With the minimalist and easy-to-use interface, you can you can visualize...',
                photo: 'female.svg',
                creator: 'Cleaner One Assistant',
                createdDate: '2020-02-28',
                image: 'AD-Block-One.svg'
            },
            {
                id: 5,
                tags:['Cleaner One','User Guide'],
                title: 'How to clean my disk with cleaner one?',
                description: 'Cleaner One (Lite) is an all-in-one disk cleaning and optimization master. With the minimalist and easy-to-use interface, you can you can visualize...',
                photo: 'male.svg',
                creator: 'Cleaner One Assistant',
                createdDate: '2020-05-31',
                image: 'Cleaner-One-iOS.svg'
            },
        ],
        features: [
            {
                id: 1,
                title: 'Junk Files Cleaner',
                description: 'Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.',
                photo: 'jfc.svg',
            },
            {
                id: 2,
                title: 'Duplicate File Scanner',
                description: 'Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.',
                photo: 'dfs.svg',
            },
            {
                id: 3,
                title: 'Junk Files Cleaner',
                description: 'Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.',
                photo: 'sps.svg',
            },
            {
                id: 4,
                title: 'Junk Files Cleaner',
                description: 'Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.',
                photo: 'omc.svg',
            },
            {
                id: 5,
                title: 'Junk Files Cleaner',
                description: 'Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.',
                photo: 'iam.svg',
            },
            {
                id: 6,
                title: 'Junk Files Cleaner',
                description: 'Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.',
                photo: 'bfs.svg',
            },
        ],
        faqs: [
            {
                id: 1,
                question: 'How to add files into white list to skip scanning junk files?',
                answer: 'We are  always availed to consult on taking your higher education to the next level so you can stay competitive in the global world. the global world. the global world. the global world. the global world. king your higher education to the next level so you can stay competitive in the global world. the global world. the global world. the global world. the global world. ',
            },
            {
                id: 2,
                question: 'How to add files into white list to skip scanning junk files?',
                answer: 'We are  always availed to consult on taking your higher education to the next level so you can stay competitive in the global world. the global world. the global world. the global world. the global world. king your higher education to the next level so you can stay competitive in the global world. the global world. the global world. the global world. the global world. ',
            },
            {
                id: 3,
                question: 'How to add files into white list to skip scanning junk files?',
                answer: 'We are  always availed to consult on taking your higher education to the next level so you can stay competitive in the global world. the global world. the global world. the global world. the global world. king your higher education to the next level so you can stay competitive in the global world. the global world. the global world. the global world. the global world. ',
            }
        ],
    },
});
