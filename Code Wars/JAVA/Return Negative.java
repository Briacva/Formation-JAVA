// Return Negative (succeeded)
// Ici je triche car il y'a un final que j'enlève.
public class Kata {

  public static int makeNegative(int x) {

    if (x > 0){
      x = x * (-1);
    }   
    return x;  
  }  
}

// En fait quand il y'a un "final" on ne peut pas modifier la valeur de la variable (ici de x en l'occurence) donc là on passe par une variable  de substitution (y)
public class Kata {

  public static int makeNegative(final int x) {
    int y=x;
    if (x > 0){
      y = x * (-1);
    } 
    return y; 
  }
}

// Ici on fonctionne d'une autre manière, je ne modifie pas x mais au return je lui applique une sorte de filtre, je modifie le return et pas le x. Par ailleurs, le (x < 0) ? x : -x; est une forme de if.
public class Kata {

  public static int makeNegative(final int x) {
      return (x < 0) ? x : -x; 
  } 
}