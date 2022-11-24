export default {
    name: 'PageInfo',
    title: 'PageInfo',
    type: 'document',
    fields: [{
            name: 'title',
            title: 'Title',
            type: 'string',
        },


        {
            name: 'heroImage',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'backgroundInformation',
            title: 'backgroundInformation',
            type: 'string',
        },

        {
            name: 'profilePic',
            title: 'profilePic',
            type: 'image',
            options: {
                hotspot: true,
            },
        },


        {
            name: 'PhoneNumber',
            title: 'PhoneNumber',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        }, {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'socials',
            title: 'Socials',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'Social' } }]
        }

    ],


}