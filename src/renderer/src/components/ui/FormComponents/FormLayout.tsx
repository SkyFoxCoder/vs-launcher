import clsx from "clsx"

/**
 * Form external wrapper.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped.
 * @param {string} [props.className] - Additional class names for styling.
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function FromWrapper({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  return <div className={clsx("mx-auto flex flex-col gap-8 items-start justify-center", className)}>{children}</div>
}

/**
 * A FormGroup must contain a FormHead and a FormBody.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {"x" | "y"} [props.alignment] - Alignment of the children. Can be "x" or "y".
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function FromGroup({ children, className, alignment = "x" }: { children: React.ReactNode; className?: string; alignment?: "x" | "y" }): JSX.Element {
  return <div className={clsx("w-full flex gap-4", alignment === "y" && "flex-col", className)}>{children}</div>
}

/**
 * A FormGroupWrapper must contain at least one FormGroup.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.title] - The title of the FormGroupWrapper.
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function FormGroupWrapper({ children, className, title }: { children: React.ReactNode; className?: string; title?: string }): JSX.Element {
  return (
    <div className="w-full flex flex-col gap-1 relative">
      {title && <h2 className="bg-zinc-800 text-zinc-600 absolute -top-3 left-4 px-1 select-none">{title}</h2>}
      <div className={clsx("w-full flex flex-col gap-4 border border-zinc-700 rounded p-3", title && "pt-5", className)}>{children}</div>
    </div>
  )
}

/**
 * Must be used within a FormGrup before a FormBody. Must contain a FormLabel.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped.
 * @param {string} [props.className] - Additional class names for styling.
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function FormHead({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  return <div className={clsx("w-1/5 flex flex-col gap-4", className)}>{children}</div>
}

/**
 * Must be used within a FormGrup after a FormHead. can contain anything.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped.
 * @param {string} [props.className] - Additional class names for styling.
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function FormBody({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  return <div className={clsx("w-4/5 flex flex-col gap-4", className)}>{children}</div>
}

/**
 * Title for this FormGroup.
 *
 * @param {object} props - The component props.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {JSX.Element | string} props.content - The content of the button. Use ONLY with text, t() or <Trans />
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function FormLabel({ className, content }: { className?: string; content: JSX.Element | string }): JSX.Element {
  return <div className={clsx("h-8 flex gap-1 items-center flex-wrap justify-end text-right select-none", className)}>{content}</div>
}

/**
 * A FormFieldGroup will align vertically or horizontally the childrens.
 * You can use it all the times you want.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {"x" | "y"} [props.alignment] - Alignment of the children. Can be "x" or "y".
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function FormFieldGroup({ children, className, alignment = "y" }: { children: React.ReactNode; className?: string; alignment?: "x" | "y" }): JSX.Element {
  return <div className={clsx("flex gap-4", alignment === "y" && "flex-col", className)}>{children}</div>
}

/**
 * Used to wrap a anything with a FormDescription.
 * This will align them vertically with a little gap.
 *
 * You can use it with a FormFieldGroup and a FormFieldDescription.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {"x" | "y"} [props.alignment] - Alignment of the children. Can be "x" or "y".
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function FormFieldGroupWithDescription({ children, className, alignment = "y" }: { children: React.ReactNode; className?: string; alignment?: "x" | "y" }): JSX.Element {
  return <div className={clsx("flex gap-1", alignment === "y" ? "flex-col" : "items-center", className)}>{children}</div>
}

/**
 * Form description. Small font and gray color.
 *
 * @param {object} props - The component props.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {JSX.Element | string} props.content - The content of the button. Use ONLY with text, t() or <Trans />
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function FormFieldDescription({ className, content }: { className?: string; content: JSX.Element | string }): JSX.Element {
  return <p className={clsx("flex gap-1 items-center flex-wrap justify-start text-xs text-zinc-600 pl-1 select-none", className)}>{content}</p>
}
