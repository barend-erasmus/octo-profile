import { TestBed, inject } from '@angular/core/testing';
import { ServiceGatewayService } from './service-gateway.service';

describe('ServiceGatewayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceGatewayService]
    });
  });

  it('should be created', inject([ServiceGatewayService], (service: ServiceGatewayService) => {
    expect(service).toBeTruthy();
  }));
});
