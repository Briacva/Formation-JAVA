// Find the smallest integer in the array (succeeded)
public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
      
      int petit = args[0];
      for (int i = 0; i<args.length; i++){
          if (args[i] < petit){
            petit = args[i];
    }
   }
  return petit;
 }
}