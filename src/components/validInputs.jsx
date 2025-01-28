// eslint-disable-next-line react/prop-types
function ValidInputs({ message }) {
  return (
    <p className="w-full text-start font-bold text-sm md:text-xs tracking-[1px] py-2 px-1 text-red-500">
      {message}
    </p>
  );
}

export default ValidInputs;
