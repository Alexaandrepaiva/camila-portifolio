import { fontWeight, fontSize, combineFont } from "~/lib/fonts";

/**
 * Example component demonstrating how to use the Rubik font with different weights and sizes
 */
export function FontExample() {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className={combineFont(fontWeight.bold, fontSize["2xl"])}>
        Rubik Font Examples
      </h2>
      
      <div className="space-y-4">
        <div>
          <h3 className={fontWeight.semibold}>Font Weights</h3>
          <p className={fontWeight.light}>Light (300) - The quick brown fox jumps over the lazy dog</p>
          <p className={fontWeight.normal}>Normal (400) - The quick brown fox jumps over the lazy dog</p>
          <p className={fontWeight.medium}>Medium (500) - The quick brown fox jumps over the lazy dog</p>
          <p className={fontWeight.semibold}>Semibold (600) - The quick brown fox jumps over the lazy dog</p>
          <p className={fontWeight.bold}>Bold (700) - The quick brown fox jumps over the lazy dog</p>
          <p className={fontWeight.extrabold}>Extrabold (800) - The quick brown fox jumps over the lazy dog</p>
          <p className={fontWeight.black}>Black (900) - The quick brown fox jumps over the lazy dog</p>
        </div>
        
        <div>
          <h3 className={fontWeight.semibold}>Font Sizes</h3>
          <p className={fontSize.xs}>Extra Small - The quick brown fox jumps over the lazy dog</p>
          <p className={fontSize.sm}>Small - The quick brown fox jumps over the lazy dog</p>
          <p className={fontSize.base}>Base - The quick brown fox jumps over the lazy dog</p>
          <p className={fontSize.lg}>Large - The quick brown fox jumps over the lazy dog</p>
          <p className={fontSize.xl}>Extra Large - The quick brown fox jumps over the lazy dog</p>
          <p className={fontSize["2xl"]}>2XL - The quick brown fox jumps over the lazy dog</p>
        </div>
        
        <div>
          <h3 className={fontWeight.semibold}>Combined Examples</h3>
          <p className={combineFont(fontWeight.light, fontSize.lg)}>
            Light Large - The quick brown fox jumps over the lazy dog
          </p>
          <p className={combineFont(fontWeight.medium, fontSize.xl)}>
            Medium XL - The quick brown fox jumps over the lazy dog
          </p>
          <p className={combineFont(fontWeight.bold, fontSize["2xl"])}>
            Bold 2XL - The quick brown fox jumps over the lazy dog
          </p>
          <p className={combineFont(fontWeight.black, fontSize["3xl"])}>
            Black 3XL - The quick brown fox jumps over the lazy dog
          </p>
        </div>
      </div>
    </div>
  );
} 