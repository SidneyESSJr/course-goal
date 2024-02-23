import type { InfoBoxData } from "../types";

const InfoBox = ({ mode, children, severity = "low" }: InfoBoxData) => {
  return (
    <aside
      className={
        mode === "warning"
          ? `infobox infobox-warning warning--${severity}`
          : "infobox infobox-hint"
      }
    >
      {mode === "warning" && <h2>Warning</h2>}
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
