/* eslint-disable react/prop-types */
export default function BlurEffect({ sideX, sideY }) {
  return (
    <div
      className={`absolute ${sideY} ${sideX} bg-emerald-400 w-[200px] h-[200px] -z-10 blur-3xl opacity-40`}
    ></div>
  );
}
