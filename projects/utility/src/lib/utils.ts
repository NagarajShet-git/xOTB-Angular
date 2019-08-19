/**
 * Generate a unique id (unique within the entire client session), Useful for temporary DOM ids.
 */
let idCounter = 0;
export function uniqueId(prefix = 'uid') {
  return `xotb_${prefix}_${++idCounter}`;
}

const noop = () => {};
export function isRequired(target: any, prop: string) {
  const NG_ON_INIT_NAME = 'ngOnInit';

  /** ngOnInit might not be implemented by this component */
  const ngOnInitClone: Function | null = target[NG_ON_INIT_NAME];

  Object.defineProperty(target, NG_ON_INIT_NAME, {
    value: function() {
      if (!(prop in this)) {
        throw Error(
          `[xotb-edge] ${target.constructor.name}: ${prop} is required, but was not provided`
        );
      }

      // Calling the original ngOnInit with its original context
      (ngOnInitClone || noop).call(this);
    }
  });
}

export function ngClassCombine(
  ngClasses: string | string[] | Set<string> | { [styleClass: string]: any },
  customClasses: { [styleClass: string]: any }
) {
  if (!ngClasses) {
    return customClasses;
  }

  // Convert string and Set to array
  if (typeof ngClasses === 'string') {
    ngClasses = ngClasses.split(/\s+/);
  } else if (ngClasses instanceof Set) {
    const a = [];
    ngClasses.forEach(v => a.push(v));
    ngClasses = a;
  }

  // Convert array to object
  if (Array.isArray(ngClasses)) {
    ngClasses = ngClasses.reduce((o: Object, styleClass: string) => {
      o[styleClass] = true;
      return o;
    }, {});
  }

  return { ...ngClasses, ...customClasses };
}
