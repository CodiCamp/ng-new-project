import { TrainDashboardModule } from './train-dashboard.module';

describe('TrainDashboardModule', () => {
  let trainDashboardModule: TrainDashboardModule;

  beforeEach(() => {
    trainDashboardModule = new TrainDashboardModule();
  });

  it('should create an instance', () => {
    expect(trainDashboardModule).toBeTruthy();
  });
});
