import { useFirestoreConnect } from "react-redux-firebase";
import { v4 as uuid } from "uuid";
import { Session } from "../models/session";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

export default function () {
  const sessionId = uuid();
  // process.env.NODE_ENV === "development" ? "XtRU5YgA6QwIingMeACY" : uuid();
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
