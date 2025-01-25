/* eslint-disable react/prop-types */
export default function Button({icon, text}) {
  return (
    <>
      {/*      <!-- Component: Large primary apple app button  --> */}
      <a
        href="#"
        className="inline-flex h-9 min-w-32 items-center justify-start gap-2 whitespace-nowrap rounded bg-neutral-500 px-3.5 text-base font-semibold tracking-wide text-slate-50 transition duration-300 hover:bg-neutral-600 focus:bg-neutral-700 focus-visible:outline-none"
      >
        {icon}
        <span className="">
          <span>{text}</span>
        </span>
      </a>
      {/*      <!-- End Large primary apple app button  --> */}
    </>
  );
}
