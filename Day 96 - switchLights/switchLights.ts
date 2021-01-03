function switchLightsts(a: number[]): number[] {
    const lights: number[] = a;
    for (let i: number = 0; i < a.length; i++) {
      if (a[i] !== 0) {
        for (let j: number = i; j >= 0; j--) {
          lights[j] = lights[j] === 0 ? 1 : 0;
        }
      }
    }
    return lights;
  }
  
  console.log(switchLightsts([1, 1, 1, 1, 1]));
  console.log(switchLightsts([0, 0]));
  