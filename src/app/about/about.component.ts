import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  features = [
    {
      title: 'Book Exchange',
      description: 'Connect with fellow book lovers and exchange your favorite reads. Share the joy of reading while discovering new stories.',
      icon: 'fa-book'
    },
    {
      title: 'Community',
      description: 'Join a vibrant community of readers. Share your thoughts, recommendations, and connect with like-minded book enthusiasts.',
      icon: 'fa-users'
    },
    {
      title: 'Easy Management',
      description: 'Keep track of your book collection, manage exchanges, and maintain your reading history all in one place.',
      icon: 'fa-tasks'
    }
  ];

  mission = {
    title: 'Our Mission',
    description: 'We believe in the power of sharing knowledge and stories. Our platform makes it easy for book lovers to connect, exchange books, and build a community around the love of reading.'
  };

  contributors = [
    {
      name: 'Preetam',
      role: 'Lead Developer',
      description: 'Passionate about creating seamless user experiences and robust backend systems.',
      image: 'assets/preetam.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'preetam@example.com'
      }
    },
    {
      name: 'Pavan',
      role: 'UI/UX Designer',
      description: 'Dedicated to crafting beautiful and intuitive interfaces that enhance user engagement.',
      image: 'assets/pavan.jpg',
      social: {
        linkedin: '#',
        github: '#',
        email: 'pavan@example.com'
      }
    }
  ];

  contactInfo = {
    email: 'saichiragb8@hmail.com',
    phone: '1234567891',
    address: 'Book Exchange Platform Headquarters',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  };

  footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/home' },
        { name: 'About', path: '/about' },
        { name: 'Books', path: '/books' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'FAQ', path: '/faq' }
      ]
    }
  ];
} 