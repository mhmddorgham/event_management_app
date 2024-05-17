export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]
export const HeroSectionCaption = {
  title: 'Host, Connect, Celebrate: Your Events, Our Platform!',
  description: 'Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.',
  button:'Explore Now',
}
export const EventsSectionCaption = {
  title: 'Host, Connect, Celebrate: Your Events, Our Platform!',
  description: 'Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.',
  button:'Explore Now',
}
export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
// TODO: add basic routes here as const like this: 
// export const BASE_ROUTES = {
//   microsite: "/",
//   signup: "/signup",
//   auth: "/auth",
//   admin: "/admin",
//   student: "/student",
//   tutor: "/tutor",
// };
