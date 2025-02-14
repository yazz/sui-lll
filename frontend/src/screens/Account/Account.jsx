import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";

const AccountScreen = () => {
  const currentAccount = useCurrentAccount();
  const { data } = useSuiClientQuery("getOwnedObjects", {
    owner: currentAccount?.address,
  });

  return (
    <>
      <span>Objects</span>
      {!data || (data.data < 1 && <span>NO DATA</span>)}
      {data && data.data >= 1 && (
        <ul>
          {data.data.map((object) => {
            console.log("OBJECT", object);
            return (
              <li key={object.data?.objectId}>
                <a
                  href={`https://example-explorer.com/object/${object.data?.objectId}`}
                >
                  {object.data?.objectId}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default AccountScreen;
