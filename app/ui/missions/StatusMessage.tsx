interface Props {
  state: { success: string | null; error: string | null };
}

export default function StatusMessage({ state }: Props) {
  if (!state.success && !state.error) return null;

  return (
    <div
      className={`p-3 text-center text-sm font-medium border-t ${
        state.error
          ? "bg-red-50 text-red-600"
          : "bg-green-50 text-green-600"
      }`}
    >
      {state.error || state.success}
    </div>
  );
}