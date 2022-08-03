import { Link } from "react-router-dom";
import * as C from "./styles";
import { ProfileIcon } from "../../svgs/profile";
import { MailIcon } from "../../svgs/mail";
import { BookIcon } from "../../svgs/book";
import { Close } from "../../svgs/Close";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SidebarItem = ({
  title,
  description,
  icon,
  path,
  active,
}: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === "profile" && <ProfileIcon />}
          {icon === "book" && <BookIcon />}
          {icon === "mail" && <MailIcon />}
          {icon === "X" && <Close />}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
