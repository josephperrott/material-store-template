/**
 * Main App Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @param $mdLog
 * @constructor
 */
class CatalogController {

  constructor($mdSidenav, $log) {
    this.$log = $log;
    this.$mdSidenav = $mdSidenav;

    this.selected = 0;
    this.categories = [

      { title: 'Feature'},
      { title: 'Latest'},
      { title: 'Fashion'},
      { title: 'Furniture'},
      { title: 'Beauty'},
      { title: 'Food'},
      { title: 'Travel'},
      { title: 'Kids'}
    ];
  }

  /**
   * Hide or Show the category menu.
   */
  toggleMenu($event) {
    this.$log.debug( "toggleMenu() ");
    this.$mdSidenav('nav-panel').toggle();
  }

  /**
   * Get the currently selected Category
   * @return a category
   */
  getSelectedCategory() {
    return this.categories[this.selected];
    $log.debug( "toggleMenu() ");
    $mdSidenav('left').toggle();
  }

  /**
   * Select a category.
   * @param category
   */
  selectCategory ( categoryIdx ) {
    this.$log.debug( "selectCategory( {title} ) ", categoryIdx);
    this.selected = categoryIdx;
    this.toggleMenu();
  }
}

CatalogController.$inject = [ '$mdSidenav', '$log' ]

export default CatalogController;
