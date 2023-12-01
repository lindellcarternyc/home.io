interface ModalFormWrapperProps {
  title: string;
  children: JSX.Element;
}

export default function ModalFormWrapper({
  title,
  children,
}: ModalFormWrapperProps) {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded bg-white p-4">
      <h3 className="text-xl">{title}</h3>
      <hr />
      {children}
    </div>
  );
}
