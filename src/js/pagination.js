import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import API from './popular/load-popular';
import apiSearchForm from './form_search/load-form'

const container = document.getElementById('tui-pagination-container');

const options = {
    totalItems: 20000,
    itemsPerPage: 20,
    visiblePages: 7,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="https://api.themoviedb.org/3/trending/movie/day?page={{page}}" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="https://api.themoviedb.org/3/trending/movie/day?page={{page}}" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="https://api.themoviedb.org/3/trending/movie/day?page={{page}}" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
  };
  
  const pagination = new Pagination(container, options);