// eslint-disable-next-line react/prop-types
export default function Skill({ icon, text }) {
  return (
    <>
      {/*<!-- Component: Base secondary button with leading icon  --> */}
      <button className="inline-flex h-10 md:max-w-32 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-neutral-200 px-5 text-sm font-medium tracking-wide text-neutral-700 grow transform transition-transform duration-300 hover:scale-110 ">
        {icon}
        <span className="">
          <span>{text}</span>
        </span>
      </button>
      {/*<!-- End Base secondary button with leading icon  --> */}
    </>
  );
}
