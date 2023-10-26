export default function YourInfo() {
  return (
    <form className="grid gap-4">
      <div className="grid gap-1">
        <label htmlFor="name" className="text-xs text-blue-900">
          Name
        </label>
        <input
          name="name"
          type="text"
          placeholder="e.g. Stephen King"
          className="px-3 py-1.5 rounded-md border"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="Email" className="text-xs text-blue-900">
          Email Address
        </label>
        <input
          name="Email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          className="px-3 py-1.5 rounded-md border"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="phone" className="text-xs text-blue-900">
          Phone Number
        </label>
        <input
          name="phone"
          type="number"
          placeholder="e.g. +1 234 567 890"
          className="px-3 py-1.5 rounded-md border"
        />
      </div>
    </form>
  );
}
