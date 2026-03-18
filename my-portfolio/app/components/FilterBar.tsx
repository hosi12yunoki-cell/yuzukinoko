"use client";

type Props = {
  filters: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
};

export default function FilterBar({ filters, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
            active === f.value
              ? "bg-pink-500 border-pink-500 text-white shadow-sm"
              : "bg-white border-pink-200 text-pink-500 hover:border-pink-400 hover:text-pink-600"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
