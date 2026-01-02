import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { SearchType } from "@/types";

interface SearchFormProps {
  onSubmit: (searchType: SearchType, value: string, country: string) => void;
  isLoading: boolean;
}

const SEARCH_TYPE_DESCRIPTIONS: Record<SearchType, string> = {
  condition: "Find foods for specific health conditions like diabetes, hypertension, or allergies",
  goal: "Get recommendations for fitness objectives like weight loss, muscle building, or improved energy",
  country: "Discover traditional foods and cuisines from different regions and cultures",
};

const getSearchTypeLabel = (type: SearchType): string => {
  switch (type) {
    case "condition":
      return "Health Condition";
    case "goal":
      return "Health Goal";
    case "country":
      return "Country Name";
  }
};

export function SearchForm({ onSubmit, isLoading }: SearchFormProps) {
  const [searchType, setSearchType] = useState<SearchType>("condition");
  const [inputValue, setInputValue] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onSubmit(searchType, inputValue.trim(), country.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <label
            htmlFor="search-type"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Search Type
          </label>
          <Select
            value={searchType}
            onValueChange={(value) => setSearchType(value as SearchType)}
            disabled={isLoading}
          >
            <SelectTrigger
              id="search-type"
              className="w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="condition">Search by Health Condition</SelectItem>
              <SelectItem value="goal">Search by Health Goal</SelectItem>
              <SelectItem value="country">Explore by Country</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-gray-500 mt-2 bg-blue-50 p-3 rounded-md border border-blue-200">
            <strong>Example: </strong>{SEARCH_TYPE_DESCRIPTIONS[searchType]}
          </div>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="search-value"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            {getSearchTypeLabel(searchType)}
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="search-value"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={SEARCH_PLACEHOLDERS[searchType]}
              className="pl-10 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              disabled={isLoading}
              required
            />
          </div>
        </div>
        </div>

        {searchType !== "country" && (
        <div>
        <label
          htmlFor="country-constraint"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Your Country (Optional)
        </label>
        <Input
          id="country-constraint"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="e.g., USA, India"
          className="w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          disabled={isLoading}
        />
          <p className="text-xs text-gray-500 mt-1.5">
            Providing a country helps in suggesting locally available foods.
          </p>
        </div>
        )}

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="w-full md:w-auto px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:opacity-60"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Searching...</span>
            </div>
          ) : (
            "Get Recommendations"
          )}
        </Button>
      </div>
    </form>
  );
}
