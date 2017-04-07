import {IScope, IIntervalService} from 'angular';

import {Game} from '../backend/Game';
import {GameSettings} from '../backend/constants/GameSettings';
import {CheckAllItemsAffordability} from '../backend/util/DataQueries';

import './app.scss';

export const App: angular.IComponentOptions = {
  template: require('./app.html'),
  controller: AppController
};

AppController.$inject = ['$scope', '$interval'];

function AppController ($scope: IScope, $interval: IIntervalService) {
  const ctrl = this;

  ctrl.$onInit = (): void => {
    ctrl.game = new Game();
    ctrl.updateTimer = $interval(tickMethod, GameSettings.tick);
    ctrl.fixedUpdateTimer = $interval(fixedTickMethod, 1000);
  }
  ctrl.resourceButton = (resourceType: string): void => {
    ctrl.game.Click(resourceType.toUpperCase());
  };
  ctrl.cheat = (): void => {
    for(let i = 0; i < 10000; i++) {
      ctrl.game.Click('MONEY');
      ctrl.game.Click('POWER');
    }
  };

  function tickMethod(): void {
    ctrl.game.Update();
    CheckAllItemsAffordability();
    $scope.$broadcast('tick');
    // $scope.$digest();
  }
  function fixedTickMethod(): void {
    ctrl.game.FixedUpdate();
  }

}
