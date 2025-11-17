import { RenderPosition, render } from '../render.js';
import RouteList from '../view/route-list-view.js';
import RoutePoint from '../view/route-point-view.js';
import EventEditForm from '../view/new-point-form-view.js';

export default class TripPresenter {
  routePointList = new RouteList();

  constructor({ container, pointsModel }) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init(){
    this.boardPoints = [...this.pointsModel.getPoints()];

    render(this.routePointList, this.container);

    for (let i = 0; i < this.boardPoints.length; i++){
      render(new RoutePoint({point: this.boardPoints[i]}), this.routePointList.getElement());
    }

    render(new EventEditForm(), this.routePointList.getElement(), RenderPosition.AFTERBEGIN);
  }
}

