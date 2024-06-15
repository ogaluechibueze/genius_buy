export const CategorySchema = {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields:[{
        name: 'name',
    title: 'Name',
    type: 'string',
    description: 'Name of Product'
},
{
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options:{
        source: 'name',
        maxLength: 50
    }
},
{
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
        hotspot: true,
    },
},
   {
    name: 'contact',
    title: 'Contact',
    type: 'string',
   }, 
   {
    name: 'address',
    title: 'Address',
    type: 'string',
   }, 
   {
    name: 'email',
    title: 'Email',
    type: 'string',
   },
],
};