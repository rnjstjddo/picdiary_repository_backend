const PageComponent = ({ serverData, movePage }) => {
  return (
    <div className="m-6 flex justify-center">
      {serverData.prev ? (
        <div
          className="m-2 p-2 w-16 text-center font-bold text-blue-400"
          onClick={() => movePage({ page: serverData.prevPage })}
        >
          {" "}
          이전
        </div>
      ) : (
        <></>
      )}

      {serverData.pageNumList.map((p) => (
        <div
          key={p}
          className={`m-2 p-2 w-12 text-center rounded shadow-md text-white ${
            serverData.current === p ? "bg-gray-500" : "bg-blue-400"
          }`}
          onClick={() => movePage({ page: p })}
        >
          {p}
        </div>
      ))}

      {serverData.next ? (
        <div
          className="m-2 p-2 w-16 text-center font-bold text-blue-400"
          onClick={() => movePage({ page: serverData.nextPage })}
        >
          다음
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PageComponent;
