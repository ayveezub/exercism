/*

Translate RNA sequences into proteins.

RNA can be broken into three nucleotide sequences called codons,
and then translated to a polypeptide like so:

  RNA: "AUGUUUUCU" => translates to:

    Codons: "AUG", "UUU", "UCU" => which become a polypeptide with the following sequence =>

    Protein: "Methionine", "Phenylalanine", "Serine"

There are 64 codons which in turn correspond to 20 amino acids;
however, all of the codon sequences and resulting amino acids are not important in this exercise.
If it works for one codon, the program should work for all of them.
However, feel free to expand the list in the test suite to include them all.

There are also three terminating codons (also known as 'STOP' codons);
if any of these codons are encountered (by the ribosome),
all translation ends and the protein is terminated.

All subsequent codons after are ignored, like this:

  RNA: "AUGUUUUCUUAAAUG" =>

    Codons: "AUG", "UUU", "UCU", "UAA", "AUG" =>

    Protein: "Methionine", "Phenylalanine", "Serine"

Note the stop codon "UAA" terminates the translation
and the final methionine is not translated into the protein sequence.


Below are the codons and resulting Amino Acids needed for the exercise.

  Codon               =>        Protein

  AUG                 =>     Methionine
  UUU, UUC            =>  Phenylalanine
  UUA, UUG            =>        Leucine
  UCU, UCC, UCA, UCG  =>         Serine
  UAU, UAC            =>       Tyrosine
  UGU, UGC            =>       Cysteine
  UGG                 =>     Tryptophan
  UAA, UAG, UGA       =>           STOP

Learn more about protein translation on Wikipedia.

If an invalid character or codon is encountered during translation,
it should throw an error with the message "Invalid codon".

```
  translate('AAA')
  // => Error: Invalid codon
```

*/

const translationTable = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP',
}

const codons = rna => (rna || '').match(/.{3,3}/g)

const protein = codon => {
  if (!translationTable[codon]) throw new Error('Invalid codon')
  return translationTable[codon]
}

export const translate = rna => {
  const rawTranslation = (codons(rna) || []).map(codon => protein(codon))

  if (!rawTranslation.includes('STOP') && (rna || '').length % 3 !== 0) throw new Error('Invalid codon')
  if (rawTranslation.at(0) === 'STOP') return []
  if (rawTranslation.includes('STOP')) return rawTranslation.slice(0, rawTranslation.indexOf('STOP'))
  return rawTranslation
}
