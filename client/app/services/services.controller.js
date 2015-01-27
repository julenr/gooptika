'use strict';

angular.module('gooptikaApp')
  .controller('ServicesCtrl', function () {
    var self = this;

    self.expertises = [
      {titleLeft: 'Fashion Brands', iconLeft:'fa-tag', descriptionLeft:'Whatever your visual profile we can help you find a customised solution that looks good.',
        titleRight: 'Eye Diseases', iconRight:'fa-medkit', descriptionRight:'Our optometrists have access to three kinds of advanced scanning technology to help spot eye health issues.'
      },
      {titleLeft: 'Contact Lenses', iconLeft:'fa-eye', descriptionLeft:'We have fitting expertise, whether for nervous first-time wearers or experienced wearers.',
        titleRight: 'Child and infant care', iconRight:'fa-child', descriptionRight:'We specialise in children’s vision, stocking frames designed for children.'
      },
      {titleLeft: 'Sports Eyewear', iconLeft:'fa-bicycle', descriptionLeft:'We have a great range of products to suit your sporting needs.',
        titleRight: 'Low Vision Services', iconRight:'fa-binoculars', descriptionRight:'We know the serious impact low vision can have on your life.'
      }
    ];

  });
