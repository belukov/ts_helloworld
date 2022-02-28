
type TPoint = {
  x: number,
  y: number,
};

type TColoredPoint = { // How to extend Type??
  p: TPoint,
  color: string
}

interface IPoint {
  x: number,
  y: number,
}

// interface IPoint {
//   color: string,
// }

interface IColoredPoint extends IPoint {
  color: string,
}

interface IMaybeColoredPoint extends IPoint {
  color?: string,
}

export function printTPoint (p: TColoredPoint) {
  console.log(`TPoint: ${p.p.x}, ${p.p.y}, ${p.color}`);
}

export function printIPoint (p: IColoredPoint | IMaybeColoredPoint) {
  console.log(`IPoint: ${p.x}, ${p.y}, ${p?.color || "_none_"}`);
}


export default function testTypes() {
  const myPoint = {
    x: 1,
    y: 2,
  }

  const color = "red";
  
  printTPoint({p: myPoint, color});
  printIPoint({...myPoint, color});
  printIPoint(myPoint);
}