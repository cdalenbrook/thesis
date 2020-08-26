import { useFirestoreConnect } from "react-redux-firebase";
import { v4 as uuid } from "uuid";
import { Session } from "../models/session";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

export default function () {
  const sessionId =
    process.env.NODE_ENV === "development"
      ? "e8009dda-8705-4058-b817-ae59c16645d7"
      : uuid();
  useFirestoreConnect([{ collection: "sessions", doc: sessionId }]);
}

export function useTypedSession(): Session | undefined {
  const session = useSelector(
    (state: RootState) => state.firestore.data.sessions
  );
  if (session && Object.keys(session).length === 1) {
    const id = Object.keys(session)[0];
    const _s: Session = {
      id,
      ...session[id],
    };
    return _s;
  }
  return undefined;
}
