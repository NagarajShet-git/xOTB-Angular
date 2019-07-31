import { Injectable, Inject, ComponentFactoryResolver } from '@angular/core';

@Injectable()
export class ComponentInjectService {
  factoryResolver: ComponentFactoryResolver;

  rootViewContainer: any;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(DynamicComponent) {
    const factory = this.factoryResolver.resolveComponentFactory(
      DynamicComponent
    );

    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
}
