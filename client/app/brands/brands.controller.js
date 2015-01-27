'use strict';

angular.module('gooptikaApp')
  .controller('BrandsCtrl', function () {
      var self = this;

      self.spectacles = [
        {shape: 'round', fabric:'metal', image:'rounded-metallic-glasses1.jpg'},
        {shape: 'round', fabric:'metal', image:'rounded-metallic-glasses2.jpg'},
        {shape: 'round', fabric:'plastic', image:'rounded-plastic-glasses1.jpg'},
        {shape: 'round', fabric:'plastic', image:'rounded-plastic-glasses2.jpg'},
        {shape: 'square', fabric:'metal', image:'square-metallic-glasses1.jpg'},
        {shape: 'square', fabric:'metal', image:'square-metallic-glasses2.jpg'},
        {shape: 'square', fabric:'plastic', image:'square-plastic-glasses1.jpg'},
        {shape: 'square', fabric:'plastic', image:'square-plastic-glasses2.jpg'},
        {shape: 'oval', fabric:'metal', image:'oval-metallic-glasses1.jpg'},
        {shape: 'oval', fabric:'metal', image:'oval-metallic-glasses2.jpg'},
        {shape: 'oval', fabric:'plastic', image:'oval-plastic-glasses1.jpg'},
        {shape: 'oval', fabric:'plastic', image:'oval-plastic-glasses2.jpg'},
        {shape: 'rectangle', fabric:'metal', image:'rectangle-metallic-glasses1.jpg'},
        {shape: 'rectangle', fabric:'metal', image:'rectangle-metallic-glasses2.jpg'},
        {shape: 'rectangle', fabric:'plastic', image:'rectangle-plastic-glasses1.jpg'},
        {shape: 'rectangle', fabric:'plastic', image:'rectangle-plastic-glasses2.jpg'}
      ];

     self.brandsImages = [
       {image: 'bevel.jpg'},
       {image: 'carrera.jpg'},
       {image: 'dg.jpg'},
       {image: 'kaenon.jpg'},
       {image: 'leonaedmiston.jpg'},
       {image: 'michaelkors.gif'},
       {image: 'mykita.gif'},
       {image: 'nodoka.gif'},
       {image: 'ogi.jpg'},
       {image: 'radley.jpg'},
       {image: 'spectacle.jpg'},
       {image: 'tomford.jpg'}
    ];

      self.selectedItem = 1;
      self.selectItem = function(index){
        self.selectedItem = index;
     };

      // init Isotope
      var iso = new Isotope('.isotope', {
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      });

      self.isotopeFilter = function(isotopeFilter){
        iso.arrange({ filter: isotopeFilter });
      };
  });




