import type { AvatarProps } from "./avatar.types";
import {
  avatarSizes,
  statusSizes,
} from "./avatar.styles";

const getInitials = (name?: string) => {
  if (!name) return "?";

  return name
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
};

const Avatar = ({
  src,
  alt,
  name,
  size = "md",
  rounded = true,
  online,
  className = "",
  ...props
}: AvatarProps) => {
  return (
    <div
      {...props}
      className={`
        relative
        inline-flex
        ${className}
      `}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? name ?? "Avatar"}
          className={`
            object-cover
            ${avatarSizes[size]}
            ${rounded ? "rounded-full" : "rounded-lg"}
          `}
        />
      ) : (
        <div
          className={`
            flex
            items-center
            justify-center
            bg-indigo-600
            font-semibold
            text-white
            ${avatarSizes[size]}
            ${rounded ? "rounded-full" : "rounded-lg"}
          `}
        >
          {getInitials(name)}
        </div>
      )}

      {online !== undefined && (
        <span
          className={`
            absolute
            bottom-0
            right-0
            rounded-full
            border-2
            border-white
            ${
              online
                ? "bg-green-500"
                : "bg-slate-400"
            }
            ${statusSizes[size]}
          `}
        />
      )}
    </div>
  );
};

export default Avatar;