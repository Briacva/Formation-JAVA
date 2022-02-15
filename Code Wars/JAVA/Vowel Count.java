// Vowel Count (succeeded)
public class VowelCount {
	public static int getCount(String str) {
		int VowelsCount = 0;
		char[] args = str.toCharArray();

		for (int i = 0; i < args.length; i++) {
			switch (args[i]) {
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
				VowelsCount++;
				break;
			}
		}
		return VowelsCount;
	}
}
