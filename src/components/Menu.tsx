import React, { FC } from "react";

interface Props {
  document: any;
  setDocument: (document: any) => void;
  id: number;
  setId: (id: number) => void;
}

const Menu: FC<Props> = ({ document, setDocument, setId, id }) => {
  const handleChange = () => {
    setId((id += 1));
    setDocument((current: string) => [
      ...current,
      { name: "untitled.md", id: id },
    ]);
  };

  let key = 0;

  return (
    <div className="flex flex-col items-center w-70v">
      <div className="flex flex-col w-90% pt-8 pb-4">
        <h1 className="text-white">MARKDOWN</h1>
        <h2 className="text-grey">MY DOCUMENTS</h2>
      </div>

      <button
        className="w-90% rounded-md p-3 text-center bg-orange text-white"
        onClick={handleChange}
      >
        + New Document
      </button>

      <div className="flex flex-col text-white mt-4 w-90%">
        {document.map((doc: any) => {
          return (
            <span className="flex items-center mb-4" key={key += 1}>
              <svg
                className="mr-4"
                width="14"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
                  fill="#FFF"
                />
              </svg>
              <input
                className="bg-black outline-none"
                defaultValue={doc.name}
                onChange={(e) => e.target.value}
                spellCheck={false}
                type="text"
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
